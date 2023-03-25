<template>
  <div class="flex flex-col items-center h-screen">
    <div class="bg-gray-100 p-8 w-2/3 mx-auto mt-8 rounded">
      <h2 class="text-xl font-bold mb-2">{{ job.job_title }}</h2>
      <p>ID: {{ job.id }}</p>
      <p class="text-gray-700">{{ job.location }}</p>
      <p class="text-gray-600 mb-2">
        £{{ job.salary_from }} - £{{ job.salary_to }}
      </p>
      <p class="text-gray-500 text-md">Posted on {{ job.posted_date }}</p>
    </div>
    <section class="bg-gray-100 p-8 w-2/3 mx-auto mt-6 rounded">
      <h3 class="text-xl font-bold mb-2">Job Details</h3>
      <p>{{ job.job_description }}</p>
    </section>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/4 mt-6 mx-auto"
    >
      Apply
    </button>
  </div>
</template>

<script>
import jobData from "../data/jobs_with_ids";

export default {
  name: "JobDetail",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      job: {},
    };
  },
  created() {
    this.job = jobData.jobs.find((job) => job.id === this.id);
  },
};
</script>
