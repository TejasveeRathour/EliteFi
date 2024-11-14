# Q1. How long did you spend on the coding test?
Answer: I spent around 15 to 20 hours on the coding test. This includes planning out the design, coding each component, and styling the user interface with Tailwind CSS to give it a clean, dark-themed look.

# Q2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Answer: A very useful recent feature in JavaScript is the ?? (nullish coalescing operator). It helps provide a default value only when a variable is null or undefined, so it doesn’t interfere with values like 0 or an empty string.

For example, in this application, I used ?? to set a default task description if none was provided, without overwriting empty entries if they were intentional:

# example:   const taskDescription = task.description ?? "No description provided";

This allows the application to handle cases where certain properties might not be defined without misinterpreting intentional blank entries.

# Q3. How would you track down a performance issue in production? Have you ever had to do this?
Answer: To track down performance issues in production, I would:

1. Check Logs: Use logs (e.g., with tools like Winston) to monitor API calls, user actions, and any errors.
2. Performance Monitoring: Set up monitoring tools like New Relic or DataDog to detect slow database queries or slow-loading pages.
3. Profiling: Use DevTools for frontend profiling and Node.js profilers for backend issues.
4. Database Tuning: Ensure database queries are optimized, with necessary indexes and only relevant data being fetched.
5. Load Testing: Use tools like JMeter to simulate high traffic and identify performance limits.

# Q4. If you had more time, what additional features or improvements would you consider adding to the task management application?
Answer: Given more time, I would add:

1. Recurring Tasks: Allow users to set tasks to repeat daily, weekly, etc., to avoid repetitive entries.
2. Priority Sorting and Drag-and-Drop: Let users reorder tasks by priority or due date, with drag-and-drop functionality.
3. Notifications and Reminders: Add reminders for tasks due soon or overdue.
4. Database Integration: Move from local storage to a cloud database like Firebase, so tasks sync across devices.
5. User Authentication: Allow users to log in, making their task list accessible from any device.