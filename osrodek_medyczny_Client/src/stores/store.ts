import { createContext, useContext } from "react";
import PatientStore from "./patientStore";
import ProjectStore from "./projectStore";


interface Store{
    patientStore: PatientStore,
    projectStore: ProjectStore,
}

export const store: Store = {
    patientStore: new PatientStore(),
    projectStore: new ProjectStore(),
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}