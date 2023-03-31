<template>
  <div class="w-full h-64">
    <img :src="forest" alt="forest" class="w-full h-full object-cover" />
    <div
      class="flex flex-col absolute top-0 left-0 w-full h-64 flex items-center justify-center"
    >
      <h1 class="text-white text-4xl font-bold">Job Search</h1>
      <div class="w-2/4">
        <input
          class="mt-8 rounded-md px-2 w-10/12 h-10"
          type="text"
          v-model="searchTerm"
          placeholder="Search by job title"
        />
        <button
          @click="performSearch"
          class="bg-blue-300 text-slate-50 font-bold rounded-lg p-2 mx-2"
        >
          Search
        </button>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-end w-full pb-2 px-2 bg-slate-50">
    <p class="text-gray-600 p-2">Sort by:</p>
    <select
      class="mt-2 rounded-md px-2 w-3/10 h-10 text-gray-600 mr-4 bg-blue-100 shadow-md"
      v-model="sortType"
    >
      <option value="default">Default</option>
      <option value="date">Most Recent</option>
      <option value="salary">Salary (High to Low)</option>
    </select>
  </div>
  <div class="flex flex-col">
    <div class="bg-slate-50 py-8 flex">
      <div class="w-4/12 flex justify-end">
        <div
          class="bg-slate-200 w-48 h-72 rounded-xl shadow-lg flex flex-col items-center text-gray-700"
        >
          <p class="text-gray-700 p-3">
            <span class="text-blue-400 font-bold">{{
              searchResults.length
            }}</span>
            Jobs Found
          </p>
          <button
            @click="selectedCategories = []"
            class="bg-blue-200 rounded-lg text-gray-700 p-1 mb-2"
          >
            Reset Filter
          </button>
          <div class="flex flex-col p-1">
            <label>
              <input
                type="checkbox"
                v-model="selectedCategories"
                value="Education"
              />
              Education
              <span class="checkmark"></span>
            </label>
            <label>
              <input
                type="checkbox"
                v-model="selectedCategories"
                value="Engineering"
              />
              Engineering
              <span class="checkmark"></span>
            </label>
            <label>
              <input
                type="checkbox"
                v-model="selectedCategories"
                value="Finance"
              />
              Finance
              <span class="checkmark"></span>
            </label>
            <label>
              <input type="checkbox" v-model="selectedCategories" value="HR" />
              HR
              <span class="checkmark"></span>
            </label>
            <label>
              <input
                type="checkbox"
                v-model="selectedCategories"
                value="Insurance"
              />
              Insurance
              <span class="checkmark"></span>
            </label>
            <label>
              <input type="checkbox" v-model="selectedCategories" value="IT" />
              IT
              <span class="checkmark"></span>
            </label>
            <label>
              <input
                type="checkbox"
                v-model="selectedCategories"
                value="Warehouse"
              />
              Warehouse
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="ml-4 w-8/12">
        <ul class="max-w-lg">
          <li
            v-for="(job, index) in filteredJobs"
            :key="index"
            class="bg-white shadow-xl mb-4 p-6 rounded-xl"
          >
            <h2 class="text-xl font-bold mb-2">
              <router-link
                :to="{ name: 'JobDetail', params: { id: job.id } }"
                >{{ job.job_title }}</router-link
              >
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
            <p class="text-gray-500 text-sm mt-4">Posted {{ Math.floor((Date.now() - new Date (job.posted_date)) / (1000 * 60 * 60 * 24)) }} days ago</p>
            <div class="text-center">
              <button
                class="bg-blue-900 hover:bg-blue-700 text-white font-bold w-5/6 mt-6 mx-auto rounded-xl"
              >
                <router-link
                  :to="{ name: 'JobDetail', params: { id: job.id } }"
                  class="block w-auto py-2 px-4"
                  >View</router-link
                >
              </button>
            </div>
          </li>
        </ul>
      </div>
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
      searchTerm: "",
      searchResults: jobData.jobs,
      sortType: "default",
      selectedCategories: [],
      jobPosted: '2022/11/01'
    };
  },

  watch: {
    searchTerm: function (newSearchTerm, oldSearchTerm) {
      this.updateSearchResults();
    },
    sortType: function (newSortType, oldSortType) {
      this.updateSearchResults();
    },
    selectedCategories: function (newCategories, oldCategories) {
      this.updateSearchResults();
    },
  },

  methods: {
    updateSearchResults() {
      this.searchResults = this.jobs.filter((job) =>
        job.job_title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (this.sortType === "date") {
        this.searchResults.sort(
          (a, b) => new Date(b.posted_date) - new Date(a.posted_date)
        );
      } else if (this.sortType === "salary") {
        this.searchResults.sort(
          (a, b) => b.salary_from + b.salary_to - (a.salary_from + a.salary_to)
        );
      }
      if (this.selectedCategories.length > 0) {
        this.searchResults = this.searchResults.filter((job) =>
          this.selectedCategories.includes(job.category)
        );
      }
      return this.searchResults;
    },
    performSearch() {
      this.updateSearchResults();
    },
  },
  computed: {
    filteredJobs() {
      return this.searchResults;
    },
    daysAgo() {
      const oneDay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds      
      const jobDate = new Date(this.jobPosted);     
      const currentDate = new Date();
      const diffDays = Math.round(Math.abs((currentDate - jobDate) / oneDay));
      return diffDays;
    },
  },
};
</script>
