const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";


// Save completed interview
export const saveInterview = async (interviewData) => {
  const response = await fetch(`${API_URL}/interviews`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(interviewData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to save interview"
    );
  }

  return data;
};


// Get dashboard data
export const getDashboardData = async (candidateId) => {
  const response = await fetch(
    `${API_URL}/interviews/dashboard?candidateId=${candidateId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to load dashboard"
    );
  }

  return data;
};


// Get single interview report
export const getInterviewReport = async (interviewId) => {
  const response = await fetch(
    `${API_URL}/interviews/${interviewId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to load interview report"
    );
  }

  return data;
};