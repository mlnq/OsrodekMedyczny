import { makeAutoObservable ,runInAction} from "mobx";
import { StringLiteralType } from "typescript";
import Patient from "../models/patient";
import { v4 as uuid } from 'uuid';

import test from '../data/researchProjects.json'
import Project from "../models/project";

export default class ProjectStore{

    testData=test;
    projectRegistry: Map<number,Project>= new Map<number,Project>();
    loading = false;
    selectedProject= <undefined | Project> undefined;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get getSelectedProject(){
        return this.selectedProject;
    }

    get projects() {
        return Array.from(this.projectRegistry.values()); 
    }

    setLoadingInitial = (state:boolean) => {
        this.loadingInitial=state;
    }
    
    loadProjects = async () =>{
        this.setLoadingInitial(true);

            try{
                // const patientLoad = await agent.Patients.list();
                const patientLoad = this.testData;
                patientLoad.forEach((project:Project) => 
                    this.projectRegistry.set(project.id,project)
                );
                this.setLoadingInitial(false);
            }
            catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
    }

   
    deleteProject = async (id:number) => {
        this.loading=true;
        try{
            //  await agent.Patients.delete(id);
             runInAction(()=>{
                this.projectRegistry.delete(id);
                this.loading=false;
            });
            console.log(this.projects)
            //NADPISANIE CAŁEGO JSONA AKTUALNIE BO NIE MAM BAZY
            this.testData=this.projects;
        }
        catch(e)
        {
            console.log(e);
            runInAction(() => {
                this.loading=false;
            });
        }
    }

    createProject = async (project: Project) =>{
        this.loading =true;
        try{
            //const response = await agent.projects.create(project);

            //TYMCZASOWE ID 
            let max=10000; let min=400;
            project.id=Math.floor(Math.random() * (max - min + 1)) + min;
            runInAction(() => {
                // project.id = response.id;
                this.projectRegistry.set(project.id,project);
                this.loading=false;
            });
        }
        catch(e){
            runInAction(() => {
                this.loading=false;
            });
            
        }
    }

    updateProject = async(project:Project)=>{
        this.loading=true;
        try{
            // await agent.Outposts.update(outpost);
            runInAction(()=>{
                this.projectRegistry.set(project.id,project);
                this.loading=false;
            });
        }
        catch(e){
            runInAction(()=>{
                this.loading=false;
            })
        }
    }

    loadProject = async (id:number) => {
        let project = this.projectRegistry.get(id);
        //EDIT zwaraca dane  do forma
        if(project){
            console.log(`Taki obiekt  w promise istnieje id:${id}, project.name: ${project.name}`);
            project.id=id;
            this.selectedProject = project;
            return project;
        }
        else {
            this.loadingInitial = true;
            try{
                //ladowanie ciała DTO 
                // project = await agent!.Projects.details(id);


                this.projectRegistry.set(project!.id,project!);
                this.selectedProject = project;

                this.setLoadingInitial(false);
                return project;
            }
            catch(e)
            {
                console.log(e);
                this.setLoadingInitial(false);
            }
        }
    }

}