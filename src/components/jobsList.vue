<template>
  <div class="w-full h-64">
    <img :src="forest" alt="forest" class="w-full h-full object-cover" />
    <div
      class="absolute top-0 left-0 w-full h-64 flex items-center justify-center"
    >
      <h1 class="text-white text-4xl font-bold">Job Search</h1>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="bg-gray-100 py-8">
     <ul class="max-w-md mx-auto">
        <li
          v-for="(job, index) in jobs"
          :key="index"
          class="bg-white shadow-xl mb-4 p-6 rounded-xl"
        >
          <h2 class="text-xl font-bold mb-2">
            <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">{{
              job.job_title
            }}</router-link>
          </h2>
          <p class="text-gray-700">ID: {{ job.id }}</p>
          <p class="text-gray-700">{{ job.location }}</p>
          <p class="text-gray-700">
            £{{ job.salary_from }} - £{{ job.salary_to }}
          </p>
          <button
            class="text-sm text-blue-400 border border-blue-400 rounded-lg px-2 mt-2"
          >
            {{ job.category }}
          </button>
          <p class="text-gray-500 text-sm mt-4">
            Posted on {{ job.posted_date }}
          </p>
          <div class="text-center">
            <button
              class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-4 w-5/6 mt-6 mx-auto rounded-xl"
            >
              <router-link
                :to="{ name: 'JobDetail', params: { id: job.id } }"
                >View</router-link
              >
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import jobData from "../data/jobs_with_ids";
import myImage from "../assets/forest.jpg";

export default {
  name: "JobList",

  data() {
    return {
      jobs: jobData.jobs,
      forest: myImage,
    };
  },
};
</script>
