const studySessions = [];

/**
 * Add a new study session to the array.
 * @param {string} topic - Topic to study.
 * @param {Date} sessionTime - Scheduled time for the session.
 * @param {number} duration - Duration of the session in minutes.
 */
export async function addSession(topic, sessionTime, duration) {
  try {
    if (!topic || typeof topic !== 'string') {
      throw new Error('Invalid topic.');
    }
    if (!(sessionTime instanceof Date) || isNaN(sessionTime.getTime())) {
      throw new Error('Invalid session time.');
    }
    if (typeof duration !== 'number' || duration <= 0) {
      throw new Error('Duration must be a positive number.');
    }

    studySessions.push({ topic, sessionTime, duration });
    console.log(`Session added: ${topic}, ${sessionTime}, ${duration} minutes`);
  } catch (error) {
    console.error(`Error adding session: ${error.message}`);
  }
}

/**
 * List all sessions scheduled for the current day.
 * @returns {Array} - Today's sessions.
 */
export function listTodaysSessions() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return studySessions.filter(
    (session) => session.sessionTime >= today && session.sessionTime < tomorrow
  );
}

/**
 * Log a countdown message when the session starts.
 * @param {object} session - The study session object.
 */
export function sessionCountdown(session) {
  const timeUntilSession = session.sessionTime.getTime() - new Date().getTime();

  if (timeUntilSession > 0) {
    setTimeout(() => {
      console.log(`Session on ${session.topic} starts now!`);
    }, timeUntilSession);
  } else {
    console.log(`The session time for ${session.topic} has already passed.`);
  }
}

/**
 * Simulate fetching study materials asynchronously for a given topic.
 * @param {string} topic - The topic to fetch materials for.
 * @returns {Promise} - Promise that resolves with the study materials.
 */
export async function fetchStudyMaterials(topic) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (topic) {
        resolve(`Study materials for ${topic}`);
      } else {
        reject(new Error('No topic provided.'));
      }
    }, 1000);
  });
}

export { studySessions };