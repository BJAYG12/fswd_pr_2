import { addSession, listTodaysSessions, sessionCountdown, fetchStudyMaterials } from './fswd_pr_2_6.mjs';

(async () => {
  await addSession('Math', new Date('2023-10-01T10:00:00'), 60);
  await addSession('Science', new Date('2023-10-01T14:00:00'), 90);
  await addSession('History', new Date('2023-10-02T09:00:00'), 45);

  console.log('Today\'s Sessions:', listTodaysSessions());

  const todaysSessions = listTodaysSessions();
  for (const session of todaysSessions) {
    sessionCountdown(session);
  }

  try {
    const materials = await fetchStudyMaterials('Math');
    console.log('Study Materials:', materials);
  } catch (error) {
    console.error(`Error fetching study materials: ${error.message}`);
  }
})();