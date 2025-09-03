import React, { useState, useEffect, useCallback } from 'react';

// Static workout data with prescribed sets and reps
const weeklyPlanData = {
    focus: "Foundation & Strength Base",
    workouts: [
        { 
            title: "Workout A: Max Strength & Power", 
            exercises: [ 
                { name: "Trap Bar Deadlift", sets: 4, reps: "4-6" }, 
                { name: "Bulgarian Split Squat", sets: 3, reps: "6-8 per leg" }, 
                { name: "Nordic Hamstring Curl", sets: 3, reps: "5-8" }, 
                { name: "Single-Leg Calf Raise", sets: 3, reps: "10-15 per leg" }, 
                { name: "Hanging Leg Raises", sets: 3, reps: "10-15" } 
            ]
        },
        { 
            title: "Workout B: Unilateral & Explosive", 
            exercises: [ 
                { name: "Single-Leg RDL", sets: 3, reps: "8-10 per leg" }, 
                { name: "Pistol Squat (to box)", sets: 3, reps: "5-8 per leg" }, 
                { name: "Kettlebell Swings", sets: 4, reps: "10-12" }, 
                { name: "Medicine Ball Slams", sets: 3, reps: "8-10" } 
            ]
        },
        { 
            title: "Plyometric Session", 
            exercises: [ 
                { name: "Pogo Hops (Single Leg)", sets: 2, reps: "15 per leg" }, 
                { name: "Bounding", sets: 3, reps: "30 yards" }, 
                { name: "Single-Leg Box Jumps", sets: 3, reps: "4 per leg" },
                { name: "Short Depth Jump", sets: 3, reps: "5" }
            ]
        }
    ]
};

const defaultSchedule = [
    { day: "Mon", activity: "Workout A" }, { day: "Tue", activity: "Recovery" },
    { day: "Wed", activity: "Plyos" }, { day: "Thu", activity: "Workout B" },
    { day: "Fri", activity: "Rest" }, { day: "Sat", activity: "Basketball" },
    { day: "Sun", activity: "Rest" }
];

const activityOptions = ["Workout A", "Workout B", "Plyos", "Basketball", "Recovery", "Rest"];


const Workout = () => {
    const [scheduleData, setScheduleData] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);
    const [saveStatus, setSaveStatus] = useState(null);

    const initializeData = useCallback(() => {
        try {
            const savedSchedule = localStorage.getItem('jumpPlanSchedule');
            setScheduleData(savedSchedule ? JSON.parse(savedSchedule) : defaultSchedule);
        } catch (error) {
            console.error("Could not load schedule data", error);
            setScheduleData(defaultSchedule);
        } finally {
            setIsInitialized(true);
        }
    }, []);

    useEffect(() => {
        initializeData();
    }, [initializeData]);

    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem('jumpPlanSchedule', JSON.stringify(scheduleData));
            } catch (error) {
                console.error("Could not save schedule to localStorage", error);
            }
        }
    }, [scheduleData, isInitialized]);

    const handleScheduleChange = (dayIndex, newActivity) => {
        const newSchedule = [...scheduleData];
        newSchedule[dayIndex].activity = newActivity;
        setScheduleData(newSchedule);
    };

    const handleSaveSchedule = () => {
        setSaveStatus('Saving...');
        localStorage.setItem('jumpPlanSchedule', JSON.stringify(scheduleData));
        setTimeout(() => {
            setSaveStatus('Saved!');
            setTimeout(() => setSaveStatus(null), 1500);
        }, 500);
    };

    const getDayOfWeek = () => (new Date().getDay() + 6) % 7;
    
    if (!isInitialized) {
        return <div className="min-h-screen flex items-center justify-center"><p>Loading Workout Plan...</p></div>;
    }

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-slate-100 text-slate-800 min-h-screen">
            <div className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-slate-900 tracking-tight">One-Foot Jump Training Guide</h1>
                    <p className="mt-2 text-lg text-slate-600">Weekly Plan</p>
                </header>

                <main>
                    <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
                        <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                            <h2 className="text-2xl font-bold text-slate-900">Weekly Schedule Planner</h2>
                            <button onClick={handleSaveSchedule} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 transition-colors disabled:bg-slate-400 w-28">
                               {saveStatus || 'Save'}
                            </button>
                        </div>
                        <p className="text-slate-600 mb-4">Arrange your training week. Today's activity is highlighted.</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3 text-center">
                            {(scheduleData.length > 0 ? scheduleData : defaultSchedule).map((item, index) => (
                                <div key={index} className={`day-item p-3 transition-all duration-300 rounded-lg ${index === getDayOfWeek() ? 'bg-yellow-200 ring-2 ring-yellow-500' : 'bg-slate-50'}`}>
                                    <p className="font-bold text-slate-800">{item.day}</p>
                                    <select value={item.activity} onChange={(e) => handleScheduleChange(index, e.target.value)} className="text-sm text-slate-600 mt-1 w-full p-2 rounded-lg border border-slate-300 bg-white">
                                        {activityOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                         <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Weekly Focus: {weeklyPlanData.focus}</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {weeklyPlanData.workouts.map(workout => (
                                <div key={workout.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                                    <div className="p-6">
                                        <h4 className="text-xl font-bold text-slate-800">{workout.title}</h4>
                                    </div>
                                    <div className="flex-grow overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead className="font-semibold text-slate-600 bg-slate-200">
                                                <tr>
                                                    <th className="p-3 text-left pl-6">Exercise</th>
                                                    <th className="p-3 text-center">Sets</th>
                                                    <th className="p-3 text-center pr-6">Reps</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {workout.exercises.map(ex => (
                                                    <tr key={ex.name} className="border-t border-slate-200">
                                                        <td className="p-3 font-medium text-slate-900 pl-6">{ex.name}</td>
                                                        <td className="p-3 text-center">{ex.sets}</td>
                                                        <td className="p-3 text-center pr-6">{ex.reps}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Workout;

