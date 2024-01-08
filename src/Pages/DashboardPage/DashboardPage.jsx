import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const DashboardPage = () => {
    const activities = JSON.parse(localStorage.getItem('activities')) || [];

    const activitiesByDay = activities.reduce((acc, activity) => {
        const date = new Date(activity.startTime).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
    }, {});

    const dailyStats = Object.keys(activitiesByDay).map((date) => {
        const dailyActivities = activitiesByDay[date];
        const totalDayTime = dailyActivities.reduce((acc, activity) => {
            const startTime = new Date(activity.startTime);
            const endTime = new Date(activity.endTime);
            const duration = endTime - startTime;
            return acc + duration;
        }, 0);

        return {
            date,
            totalHours: (totalDayTime / (1000 * 60 * 60)).toFixed(2),
            activities: dailyActivities,
        };
    });

    const overallTotalTime = dailyStats.reduce((acc, day) => acc + parseFloat(day.totalHours), 0).toFixed(2);

    const chartData = dailyStats.map((day) => ({
        date: day.date,
        totalHours: parseFloat(day.totalHours),
        percentage: ((parseFloat(day.totalHours) / overallTotalTime) * 100).toFixed(2),
    }));

    const pieChartData = dailyStats.map((day, index) => ({
        name: day.date,
        value: parseFloat(day.totalHours),
        percentage: ((parseFloat(day.totalHours) / overallTotalTime) * 100).toFixed(2),
        color: `#${(index * 454 + 100).toString(16)}`,
    }));

    return (
        <div className="container mx-auto mt-8 flex">
            <div className="flex-1 mt-8 mr-4">
                <h2 className="text-2xl font-bold mb-4">Cumulative Total Time by Day</h2>
                <p className="text-xl mb-4">Overall Total Time: {overallTotalTime} hours</p>
                <BarChart
                    width={200}
                    height={300}
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalHours" fill="#82ca9d" animationDuration={1000} />
                </BarChart>
            </div>
            <div className="flex-1 mt-8">
                <h2 className="text-2xl font-bold mb-4">Total Time Distribution (Pie Chart)</h2>
                <PieChart width={400} height={300}>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Pie
                        data={pieChartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
    );
};

export default DashboardPage;
