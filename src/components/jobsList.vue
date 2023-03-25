<template>
<h1 class="text-xl font-bold mb-2">Job Search</h1>
  <div class="bg-gray-100 py-8">
    <ul class="max-w-md mx-auto">
      <li
        v-for="(job, index) in jobs"
        :key="index"
        class="bg-white shadow mb-4 p-6 rounded"
      >
        <h2 class="text-xl font-bold mb-2">
            <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">{{ job.job_title }}</router-link>
        </h2>
        <p class="text-gray-700">{{ job.location }}</p>
        <p class="text-gray-600 mb-2">
          £{{ job.salary_from }} - £{{ job.salary_to }}
        </p>
        <p class="text-gray-600">{{ job.category }}</p>
        <p class="text-gray-500 text-sm mt-4">
          Posted on {{ job.posted_date }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import jobData from "../data/jobs_with_ids";


export default {
  name: "JobList",
 
  data() {
    return {
      jobs: jobData.jobs,
    };
  },
};
</script>
