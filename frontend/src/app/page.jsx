import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <div class="max-w-6xl mx-auto my-12 px-6 mt-[150px]">
        <h1 class="text-5xl font-bold mb-4">Helping Those in Need</h1>
        <p class="mb-8">
          Welcome to our website dedicated to supporting the less fortunate.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h2 class="text-3xl font-bold mb-4">
              Make a Difference Today and Help Those in Need
            </h2>
            <p class="mb-6">
              Join us in our mission to support the needy and create positive
              change in our community.
            </p>
            <div class="flex flex-col space-y-4">
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
              />
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-black text-white disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Sign up
              </button>
              <p class="text-sm">
                By clicking Sign Up, you confirm that you agree with our Terms
                and Conditions.
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center bg-gray-300 aspect-video">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-6xl text-white"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex flex-col max-w-6xl mx-auto my-12 p-8 md:flex-row md:items-center md:justify-between md:space-x-8">
        <div class="w-full md:w-2/3 pr-8">
          <div>
            <h6 class="text-sm font-semibold uppercase text-gray-600">
              Empower
            </h6>
            <h2 class="mt-2 text-4xl font-bold leading-tight text-gray-900">
              Transparent Donations: Making a Difference Together
            </h2>
            <p class="mt-4 text-gray-700">
              At our platform, we believe in the power of transparent donations.
              Every contribution you make goes directly to those in need,
              ensuring that your generosity has a mean
            </p>
            <ul class="mt-6 space-y-4">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="ml-2 text-gray-700">
                  Helping Needy Members Rebuild Their Lives
                </span>
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="ml-2 text-gray-700">
                  Supporting Local Communities Through Crowdfunding
                </span>
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="ml-2 text-gray-700">
                  Creating Lasting Change, One Donation at a Time
                </span>
              </li>
            </ul>
          </div>
          <div class="flex mt-8">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mr-4">
              Learn More
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              Sign Up
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/3 mt-8 md:mt-0">
          <div class="aspect-w-1 aspect-h-1"></div>
        </div>
      </div>
      <div class="bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div class="space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-10 w-10 text-black mx-auto"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" x2="4" y1="22" y2="15"></line>
              </svg>
              <h2 class="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Simplified Process for Donating and Starting Campaigns
              </h2>
              <p class="text-center text-sm text-gray-600">
                Learn how you can make a difference by donating to those in need
                or starting a campaign.
              </p>
              <div class="flex justify-center space-x-2">
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                  Donate
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Start
                </button>
              </div>
            </div>
            <div class="space-y-4 bg-blue-600 text-white p-4 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-10 w-10 text-white mx-auto"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" x2="4" y1="22" y2="15"></line>
              </svg>
              <h2 class="text-center text-2xl font-extrabold sm:text-3xl">
                Simple Steps to Donate or Start a Campaign
              </h2>
              <p class="text-center text-sm">
                Follow these easy steps to contribute to a cause or launch your
                own campaign.
              </p>
              <div class="flex justify-center space-x-2">
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-blue-600">
                  Contribute
                </button>
              </div>
            </div>
            <div class="space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-10 w-10 text-black mx-auto"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" x2="4" y1="22" y2="15"></line>
              </svg>
              <h2 class="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Simplified Process for Donating and Starting Campaigns
              </h2>
              <p class="text-center text-sm text-gray-600">
                Learn how you can make a difference by donating to those in need
                or starting a campaign.
              </p>
              <div class="flex justify-center space-x-2">
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                  Donate
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8 p-4">
          <Image
            src="/placeholder.svg"
            alt="Placeholder"
            class="h-72 w-72 bg-gray-300"
            width="300"
            height="300"
            // style="aspect-ratio: 300 / 300; object-fit: cover;"
            className="aspect-w-1 aspect-h-1 object-cover rounded-lg"
          />
          <div class="space-y-6">
            <h2 class="text-2xl font-bold">
              Discover Tax Deductible Donations
            </h2>
            <p>
              Make a difference by donating to our cause. Your contributions are
              tax deductible and help those in need.
            </p>
            <h3 class="text-xl font-semibold">Support Recurring Donations</h3>
            <p>
              Enable recurring donations to provide ongoing support to the
              needy. Set up automatic monthly contributions and make a lasting
              impact.
            </p>
            <h3 class="text-xl font-semibold">Share on Social Media</h3>
            <p>
              Spread the word about our cause by sharing your donations on
              social media. Encourage others to join and make a difference.
            </p>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full lg:w-auto">
              Donate
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mt-[60px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8">
          <div class="bg-gray-300 p-8 rounded-lg text-center">
            <h2 class="text-2xl font-bold mb-4">Make a Difference Today</h2>
            <p class="mb-6">
              Join us in supporting those in need and create a positive impact.
            </p>
            <div class="flex justify-center space-x-4">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white">
                Start
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white">
                Donate
              </button>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4 text-center">
              Stay Updated with Our Newsletter
            </h3>
            <form class="flex flex-col items-center">
              <input
                class="flex h-10 border bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4 p-2 border-gray-300 rounded w-full max-w-md"
                placeholder="Enter email address"
                type="email"
              />
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white w-full max-w-md">
                Subscribe Now
              </button>
            </form>
            <p class="text-xs text-center mt-2">
              By subscribing, you agree to our Terms and Conditions.
            </p>
          </div>
          <div class="text-center">
            <div class="bg-gray-400 p-8 rounded-lg inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-white text-6xl mb-4"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <div class="mt-4">
              <div class="flex justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <p class="mb-4">
                Donating to this website has been an incredibly rewarding
                experience. I am grateful for the opportunity to make a
                difference in the lives of those in need.
              </p>
              <p class="font-semibold">John Doe</p>
              <p class="text-sm">Campaign Organizer, ABC Foundation</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-12">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Discover Inspiring Stories
            </h2>
            <p class="mt-4 max-w-2xl text-xl mx-auto">
              Explore insightful articles and stories related to the cause.
            </p>
          </div>
          <div class="mt-12 grid gap-8 lg:grid-cols-3">
            <div class="flex flex-col">
              <Image
                src="/placeholder.svg"
                alt=""
                class="h-64 w-full object-cover"
                width="200"
                height="200"
                // style="aspect-ratio: 200 / 200; object-fit: cover;"
              />
              <div class="mt-6">
                <span class="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Category
                </span>
                <h3 class="text-2xl font-bold leading-8 mt-2">
                  The Power of Giving Back
                </h3>
                <p class="mt-4 text-base text-gray-500">
                  Learn how small acts of kindness can make a big difference.
                </p>
                <div class="mt-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">John Doe</p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2022-01-11">11 Jan 2022</time>
                      <span aria-hidden="true">·</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <Image
                src="/placeholder.svg"
                alt=""
                class="h-64 w-full object-cover"
                width="200"
                height="200"
                // style="aspect-ratio: 200 / 200; object-fit: cover;"
              />
              <div class="mt-6">
                <span class="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Category
                </span>
                <h3 class="text-2xl font-bold leading-8 mt-2">
                  Creating Lasting Change
                </h3>
                <p class="mt-4 text-base text-gray-500">
                  Discover innovative solutions that are transforming lives.
                </p>
                <div class="mt-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Jane Smith</p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2022-01-11">11 Jan 2022</time>
                      <span aria-hidden="true">·</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <Image
                src="/placeholder.svg"
                alt=""
                class="h-64 w-full object-cover"
                width="200"
                height="200"
                // style="aspect-ratio: 200 / 200; object-fit: cover;"
              />
              <div class="mt-6">
                <span class="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Category
                </span>
                <h3 class="text-2xl font-bold leading-8 mt-2">
                  Empowering Communities
                </h3>
                <p class="mt-4 text-base text-gray-500">
                  See how collective efforts are bringing positive change.
                </p>
                <div class="mt-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      David Johnson
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2022-01-11">11 Jan 2022</time>
                      <span aria-hidden="true">·</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 text-center">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mx-auto">
              View all
            </button>
          </div>
        </div>
        <footer class="border-t border-gray-200 py-8 mt-8">
          <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Logo
              </h3>
              <p class="mt-4 text-base text-gray-500">
                Stay up to date on the latest features and releases by joining
                our newsletter.
              </p>
              <div class="mt-8">
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-3"
                  placeholder="Email Address"
                  type="email"
                />
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Subscribe
                </button>
              </div>
              <p class="mt-4 text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Column One
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link One
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Two
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Three
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Four
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Five
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Column Two
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Six
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Seven
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Eight
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Nine
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    Link Ten
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Follow us
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-5 h-5 text-gray-500"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>{" "}
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-5 h-5 text-gray-500"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>{" "}
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-5 h-5 text-gray-500"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>{" "}
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    class="text-base text-gray-500 hover:text-gray-900"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-5 h-5 text-gray-500"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>{" "}
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8 md:flex md:items-center md:justify-between">
            <p class="text-base text-gray-400">
              © 2023 Relume. All rights reserved.
            </p>
            <div class="mt-4 md:mt-0 md:order-1">
              <a class="text-sm text-gray-500 hover:text-gray-900" href="#">
                Privacy Policy
              </a>
              <span class="mx-2 text-gray-500">|</span>
              <a class="text-sm text-gray-500 hover:text-gray-900" href="#">
                Terms and Conditions
              </a>
              <span class="mx-2 text-gray-500">|</span>
              <a class="text-sm text-gray-500 hover:text-gray-900" href="#">
                Cookies Settings
              </a>
            </div>
          </div>
        </footer>
      </div>
      <ToastContainer />
    </>
  );
}
