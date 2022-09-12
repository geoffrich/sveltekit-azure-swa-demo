import adapter from "svelte-adapter-azure-swa";

function getAdapter() {
  console.log(
    "******** ACTION ENV VARS",
    process.env.GITHUB_ACTION_REPOSITORY,
    process.env.GITHUB_ACTION
  );
  return adapter();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: getAdapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },
};

export default config;
