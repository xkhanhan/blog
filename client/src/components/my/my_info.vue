<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="name" label="姓名" prop="name">
      <a-input
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="个性签名" prop="signature">
      <a-input v-model="form.signature" />
    </a-form-model-item>
    <a-form-model-item label="性别" prop="sex">
      <a-radio-group v-model="form.sex">
        <a-radio value="0"> 女 </a-radio>
        <a-radio value="1"> 男 </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="出生年月" required prop="birthday">
      <a-date-picker
        v-model="form.birthday"
        format="YYYY-MM-DD"
        type="date"
        placeholder="请选择出生年月"
        style="width: 100%"
      />
    </a-form-model-item>


    <a-form-model-item label="qq" prop="qq">
      <a-input v-model="form.qq" />
    </a-form-model-item>
    <a-form-model-item label="邮箱" prop="e_mail">
      <a-input v-model="form.e_mail" />
    </a-form-model-item>
    <a-form-model-item label="地址" prop="address">
      <a-input v-model="form.address" />
    </a-form-model-item>
    <a-form-model-item label="人生理想" prop="ideal">
      <a-input v-model="form.ideal" />
    </a-form-model-item>
    <a-form-model-item label="git 地址" prop="git">
      <a-input v-model="form.git" />
    </a-form-model-item>

    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> Create </a-button>
      <a-button style="margin-left: 10px" @click="resetForm"> Reset </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import api from "@/api/api";
import "moment/locale/zh-cn";
export default {
  async created() {
    const data = await api.Admin.get();
    const result = data.result;
  


    const from = {
      ...result.Admin_info,
    };
    this.form = from;
  },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        sex: "",
        birthday: "",
        qq: "",
        e_mail: "",
        ideal: "",
        signature: "",
        git: "",
      },
      rules: {
        Admin_name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "至少为3-5个中英文字符",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "请选择性别",
            trigger: "blur",
          },
        ],
        birthday: [{ required: true, message: "请选择出生年月" }],
        qq: [
          {
            required: true,
            message: "请输入QQ",
            trigger: "change",
          },
        ],
        e_mail: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
            trigger: "blur",
          },
        ],
        ideal: [
          {
            required: true,
            message: "请输入人生理想",
            trigger: "blur",
          },
        ],
        signature: [
          {
            required: true,
            message: "请输入个性签名",
            trigger: "blur",
          },
        ],
        git: [
          {
            required: true,
            message: "请输入gti地址",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
     onSubmit() {
      this.$refs.ruleForm.validate( async (valid) => {
        if (valid) {
            const form = this.form;
            const data = {
                Admin_info : {},
                Admin_hobs : []
            }
            for (const key in form) {
                if(key == "Admin_hobs"){
                    form[key].map(v => {
                        data.Admin_hobs.push({
                            hob_name : v
                        })
                    })
                }else{
                    data.Admin_info[key] = form[key];
                }
            }
           const result = await api.Admin.update(data)
        console.log(result);
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>