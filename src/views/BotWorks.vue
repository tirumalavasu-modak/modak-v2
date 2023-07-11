<template>
  <v-container class="mt-12">
    <PageHeader
      title="BOTWorks"
      subtitle="BOTs are independent units with scalable functionality. They accelerate the development of business logic by separating it from code and also help in easy integration of complex workflows"
    />
    <v-row class="my-8">
      <v-img src="@/assets/images/diagram_1.svg"></v-img>
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
        <v-img src="@/assets/images/Managed-Services.svg"></v-img>
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
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/fully_decoupled.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Fully Decoupled</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/asynchronous.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Asynchronous</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/stateless_bot.svg"
            alt="Image"
            class="h-4"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Stateless BOT</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-16">
          <v-img
            src="@/assets/images/stateless_message.svg"
            alt="Image"
            class="h-4"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Stateful message</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/polymorphic.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Polymorphic</span>
      </div>
    </v-row>
    <v-row
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-72"
    >
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/fault_tolerant.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Fault-tolerant</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img src="@/assets/images/gxp.svg" alt="Image" class="h-12" />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Compliance to GxP</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/schema_independent.svg"
            alt="Image"
            class="h-8"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold my-4">Schema independent</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-10">
          <v-img
            src="@/assets/images/failure_notification.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold my-4">Failure notification</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img src="@/assets/images/kafka.svg" alt="Image" class="h-12" />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Persistence in the bus (Kafka)</span>
      </div>
    </v-row>
    <v-row
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-72"
    >
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/monitoring_auditing_logging.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Monitoring, auditing & logging</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/intrinsic_regression.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Intrinsic regression testing</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/distributed_auto_scaling.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold my-4"
          >Distributed for auto- scaling</span
        >
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-14">
          <v-img
            src="@/assets/images/workflow_using_meta_msgs.svg"
            alt="Image"
            class="h-8"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold my-4"
          >Workflow using meta messages</span
        >
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-10">
          <v-img
            src="@/assets/images/robust_error.svg"
            alt="Image"
            class="h-16"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold my-4"
          >Robust error handling (Resilience)</span
        >
      </div>
    </v-row>
    <v-row
      class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 gap-6 min-h-96 content-center"
    >
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-14">
          <v-img
            src="@/assets/images/control_center.svg"
            alt="Image"
            class="h-8"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">Control center (Spin up, Pause, Stop BOTs)</span>
      </div>
      <div class="flex flex-col text-center p-4">
        <div class="progress-bar py-12">
          <v-img
            src="@/assets/images/high_vol_msging.svg"
            alt="Image"
            class="h-12"
          />
          <div class="progress-overlay">
            <v-progress-circular
              size="120"
              width="6"
              value="75"
              rotate="-90"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
        <span class="text-navy font-bold">High volume messaging /High events handling</span>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from "@/components/general/PageHeader.vue";
export default {
  components: {
    PageHeader,
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
