<template>
  <div>
    <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
      <table
        v-for="(info, index) in paramInfo.sizes"
        class="info-size"
        :key="index"
      >
        <tr v-for="(tr, indey) in info" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </table>
      <table class="info-param">
        <tr v-for="(info, index) in paramInfo.infos" :key="index">
          <td class="info-param-key">{{ info.key }}</td>
          <td class="param-value">{{ info.value }}</td>
        </tr>
      </table>
      <div class="info-img" v-if="paramInfo.image.length !== 0">
        <img :src="paramInfo.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param {
  border-top: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  width: 95px;
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>