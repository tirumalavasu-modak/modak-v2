<template>
  <v-container class="mt-12">
    <PageHeader
      title="BOTWorks"
      subtitle="BOTs are independent units with scalable functionality. They accelerate the development of business logic by separating it from code and also help in easy integration of complex workflows"
    />
    <v-row class="my-8">
      <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/diagram_1.svg"></v-img>
    </v-row>
    <v-row class="flex flex-row items-center my-12">
      <v-col cols="12" md="6">
        <h3>
          <span class="text-modak-blue">Smart </span
          ><span class="text-navy">BOTs</span>
        </h3>
        <span class="font-semibold">Resilient and scalable</span>
        <p class="mt-4">
          Smart BOTs are decentralized event-driven workflow engines, which can
          scale up based on workload
        </p>
        <br />
        <p>
          The core feature of BOTs is that they are asynchronous and able to run
          numerous tasks parallelly. Earlier, identifying a failed job and
          rerunning it was a nightmare for data ingestion and curation. Due to
          manual efforts involved in recurring the failed jobs, SLA breaches
          were quite frequent and tedious. However, BOTs are empowered to craft
          high-performance variants of themselves. They are the medium,
          mechanism, and platform for getting greater value from data analytics
          and augmented data preparation.
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/04/Smart-BOTs.svg"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <h3 class="w-full text-center">
        <span class="text-navy">Why </span
        ><span class="text-modak-blue">BOTs?</span>
      </h3>
    </v-row>
    <v-row
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-72"
    >
    <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/fully_decoupled.svg"
        title="Fully Decoupled" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/asynchronous.svg"
        title="Asynchronous" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/stateless_bot.svg"
        title="Stateless BOT" subTitle="" url="" pos="1000" class="custom-height" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/stateless_message.svg"
        title="Stateful message" subTitle="" url="" pos="1000" class="custom-height" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/polymorphic.svg"
        title="Polymorphic" subTitle="" url="" pos="1000" />
    </v-row>
    <v-row
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-72"
    >
    <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/fault_tolerant.svg"
        title="Fault-tolerant" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/gxp.svg"
        title="Compliance to GxP" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/schema_independent.svg"
        title="Schema independent" subTitle="" url="" pos="1000" class="custom-height"/>
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/failure_notification.svg"
        title="Failure notification" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/kafka.svg"
        title="Persistence in the bus (Kafka)" subTitle="" url="" pos="1000" />
    </v-row>
    <v-row
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-72"
    >
    <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/monitoring_auditing_logging.svg"
        title="Monitoring, auditing & logging" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/intrinsic_regression.svg"
        title="Intrinsic regression testing" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/distributed_auto_scaling.svg"
        title="Distributed for auto- scaling" subTitle="" url="" pos="1000" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/workflow_using_meta_msgs.svg"
        title="Workflow using meta messages" subTitle="" url="" pos="1000" class="custom-height" />
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/robust_error.svg"
        title="Robust error handling (Resilience)" subTitle="" url="" pos="1000" />
    </v-row>
    <v-row
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-96 content-center"
    >
    <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/control_center.svg"
        title="Control center (Spin up, Pause, Stop BOTs)" subTitle="" url="" pos="1000" class="custom-height"/>
        <ProgressCircleSmall imgPath="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/03/high_vol_msging.svg"
        title="High volume messaging /High events handling" subTitle="" url="" pos="1000" />
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from "@/components/general/PageHeader.vue";
import ProgressCircleSmall from '@/components/general/ProgressCircleSmall.vue';
export default {
  components: {
    PageHeader,
    ProgressCircleSmall
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>
