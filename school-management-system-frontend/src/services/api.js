import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor — attach auth token if present
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor — global error handling
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('[API Error]', error?.response?.data || error.message);
        return Promise.reject(error);
    }
);

// ---- API Methods ----

/** GET /api/news — Latest news articles */
export const fetchNews = (limit = 3) =>
    api.get(`/api/news?limit=${limit}`);

/** GET /api/achievements — Student achievements & toppers */
export const fetchAchievements = () =>
    api.get('/api/achievements');

/** GET /api/testimonials — Parent/student testimonials */
export const fetchTestimonials = () =>
    api.get('/api/testimonials');

/** GET /api/gallery — Gallery images */
export const fetchGallery = (category = '') =>
    api.get(`/api/gallery${category ? `?category=${category}` : ''}`);

/** GET /api/results — Academic results */
export const fetchResults = (year) =>
    api.get(`/api/results${year ? `?year=${year}` : ''}`);

/** POST /api/admissions/enquiry — Admission enquiry form */
export const submitAdmissionEnquiry = (formData) =>
    api.post('/api/admissions/enquiry', formData);

/** POST /api/contact — Contact form */
export const submitContactForm = (formData) =>
    api.post('/api/contact', formData);

export default api;
