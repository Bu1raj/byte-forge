import React, {createContext, useContext} from 'react';

const StudentDataContext = createContext();

export function useStudentDataContext() {
    return useContext(StudentDataContext);
}

export function StudentDataProvider({children}){
    
    const value ={};
    return (
        <StudentDataContext.Provider value={value}>{children}</StudentDataContext.Provider>
    )
}