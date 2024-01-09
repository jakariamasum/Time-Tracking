import { ScheduleComponent, Inject, Day, Week, Month, Agenda } from '@syncfusion/ej2-react-schedule'

const Calendar = () => {
    const eventsData = [
        {
            Id: 1,
            Subject: 'Meeting with client',
            StartTime: new Date(2024, 0, 9, 10, 0),
            EndTime: new Date(2024, 0, 9, 12, 0),
        },
        {
            Id: 2,
            Subject: 'Team lunch',
            StartTime: new Date(2024, 0, 10, 12, 30),
            EndTime: new Date(2024, 0, 10, 14, 0),
        },
        {
            Id: 3,
            Subject: 'Project Submission',
            StartTime: new Date(2024, 0, 11, 9, 0),
            EndTime: new Date(2024, 0, 11, 11, 0),
        },
        {
            Id: 4,
            Subject: 'Industry Visit',
            StartTime: new Date(2024, 0, 28, 14, 0),
            EndTime: new Date(2024, 0, 28, 16, 0),
        },
        {
            Id: 5,
            Subject: 'Team Meeting',
            StartTime: new Date(2024, 0, 23, 11, 0),
            EndTime: new Date(2024, 0, 23, 13, 0),
        },
        {
            Id: 6,
            Subject: 'Get the project',
            StartTime: new Date(2024, 0, 14, 15, 0),
            EndTime: new Date(2024, 0, 14, 17, 0),
        },
        {
            Id: 7,
            Subject: 'Finished project',
            StartTime: new Date(2024, 0, 27, 10, 30),
            EndTime: new Date(2024, 0, 27, 12, 30),
        },
        {
            Id: 8,
            Subject: 'Call client',
            StartTime: new Date(2024, 0, 31, 13, 0),
            EndTime: new Date(2024, 0, 31, 15, 0),
        },
        {
            Id: 9,
            Subject: 'Meeting',
            StartTime: new Date(2024, 1, 17, 16, 0),
            EndTime: new Date(2024, 1, 17, 18, 0),
        },
        {
            Id: 10,
            Subject: 'Indor games',
            StartTime: new Date(2024, 1, 25, 8, 30),
            EndTime: new Date(2024, 1, 25, 10, 30),
        },
        {
            Id: 11,
            Subject: 'Group Working',
            StartTime: new Date(2024, 1, 29, 13, 0),
            EndTime: new Date(2024, 1, 29, 15, 0),
        },
        {
            Id: 12,
            Subject: 'Meeting with client',
            StartTime: new Date(2024, 1, 19, 16, 0),
            EndTime: new Date(2024, 1, 19, 18, 0),
        },
    ]
    return (
        <div>
            <ScheduleComponent currentView='Month' eventSettings={{ dataSource: eventsData }}>
                <Inject services={[Day, Week, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    );
};

export default Calendar;