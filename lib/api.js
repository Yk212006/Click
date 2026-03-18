/**
 * API Service for Strapi CMS Integration
 * Handles all data fetching from the Strapi backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

/**
 * Generic fetch function with error handling
 */
async function fetchAPI(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error;
  }
}

/**
 * Fetch all projects with relations populated
 */
export async function getAllProjects(filters = {}) {
  const queryParams = new URLSearchParams({
    populate: "*",
    ...filters,
  });

  return fetchAPI(`/projects?${queryParams.toString()}`);
}

/**
 * Fetch a single project by ID
 */
export async function getProjectById(id) {
  return fetchAPI(`/projects/${id}?populate=*`);
}

/**
 * Fetch projects by category
 */
export async function getProjectsByCategory(category) {
  return fetchAPI(`/projects?filters[category]=${category}&populate=*`);
}

/**
 * Fetch all categories
 */
export async function getCategories() {
  return fetchAPI("/projects?fields[0]=category&populate=*");
}

/**
 * Submit contact form
 */
export async function submitContactForm(data) {
  return fetchAPI("/contact-submissions", {
    method: "POST",
    body: JSON.stringify({
      data,
    }),
  });
}

/**
 * Fetch page content (for dynamic pages like About, Services)
 */
export async function getPageContent(pageSlug) {
  return fetchAPI(`/pages?filters[slug]=${pageSlug}&populate=*`);
}

export default {
  getAllProjects,
  getProjectById,
  getProjectsByCategory,
  getCategories,
  submitContactForm,
  getPageContent,
};
