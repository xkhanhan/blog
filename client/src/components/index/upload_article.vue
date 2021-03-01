<template>
  <a-row :style="{ height: '100%' }">
    <a-modal
      :style="{ zIndex: 999 }"
      v-model="visible"
      title="提交"
      @ok="handleOk"
    >
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <a-form-model-item ref="title" label="文章标题" prop="title">
          <a-input allow-clear v-model="form.title" />
        </a-form-model-item>
        <a-form-model-item ref="add" label="文章标签">
          <a-input size="large" v-model="label" prop="tag">
          </a-input>
          <a-button @click="addTag" type="primary"> 添加 </a-button>
        </a-form-model-item>

          <a-tag tag="i" v-for="(i, index) in tag" :key="index" closable  @close="closeTag(index)">{{
            i.name
          }}</a-tag>
     
        <a-form-model-item
          ref="brief"
          label="文章简略信息"
          help="最多输入两百字"
          prop="brief"
        >
          <a-textarea :rows="8" allow-clear v-model="form.brief" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <mavon-editor
      ref="md"
      :ishljs="true"
      @save="save"
      @imgAdd="$imgAdd"
      v-model="form.value"
      :style="{ height: '100%', zIndex: 998 }"
    />
  </a-row>
</template>

<script>
import api from "@/api/api";

export default {
  data() {
    return {
      visible: false,
      rules: {
        title: [
          { required: true, message: "请输入你的文章标题", trigger: "blur" },
        ],
        brief: [
          { required: true, message: "请输入文章的简略信息", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value.length > 200) {
                callback(`最多输入200字，当前字数${value.length}`);
              }
              callback();
            },
          },
        ],
      },
      label:'',
      tag : [],
      form: {
        title: "",
        brief: "",
        value: "",
        label: [],
      },
    };
  },
  methods: {
   
    handleOk() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(this.form);
        } else {
          return false;
        }
      });
    },
    save() {
      this.visible = true;
    },
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);

      console.log(formdata);
      api.loadImg(formdata).then((url) => {
        this.$refs.md.$img2Url(pos, url);
      });
    },

     addTag() {
         if(!this.label){
             return;
         }
         this.tag.push({name:this.label})
         this.label = ''
        console.log(this.tag);
    },

    closeTag(i){
        console.log(i);
        const list = [...this.tag];
        list.splice(i, 1);
        this.tag = list
        console.log(list);
    }
  },
};
</script>
