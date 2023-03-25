<template>
<div class="w-full h-64">
<img :src="forest" alt="forest" class="w-full h-full object-cover" />
<div class="absolute top-0 left-0 w-full h-64 flex items-center justify-center">
      <h1 class="text-white text-4xl font-bold">Job Details</h1>
    </div>
</div>
  <div class="flex flex-col items-center h-screen">
    <div class="bg-gray-100 p-8 w-2/3 mx-auto mt-8 rounded-lg shadow-xl">
      <h2 class="text-xl font-bold mb-2">{{ job.job_title }}</h2>
      <p class="text-gray-700">ID: {{ job.id }}</p>
      <p class="text-gray-700">{{ job.location }}</p>
      <p class="text-gray-700 mb-2">
        £{{ job.salary_from }} - £{{ job.salary_to }}
      </p>
      <p class="text-gray-500 text-md">Posted on {{ job.posted_date }}</p>
    </div>
    <section class="bg-gray-100 p-8 w-2/3 mx-auto mt-6 rounded-lg shadow-xl">
      <h3 class="text-xl font-bold mb-2">Job Details</h3>
      <p>{{ job.job_description }}</p>
    </section>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-2/4 mt-10 mx-auto"
      @click="submitApplication"
    >
      Apply
    </button>
  </div>
</template>

<script>
import jobData from "../data/jobs_with_ids";
import myImage from '../assets/forest.jpg'

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
      forest: myImage,
    };
  },
  created() {
    this.job = jobData.jobs.find((job) => job.id === this.id);
  },
  //
   mounted() {
      const applyButton = document.querySelector('.apply-button');
      if (applyButton) {
      applyButton.addEventListener('click', this.submitApplication);
      }
    },
    methods: {
      submitApplication() {
        alert("Your application was sent!");
      }
    }
    //
};
</script>
