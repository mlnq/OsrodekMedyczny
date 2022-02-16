import { makeAutoObservable ,runInAction} from "mobx";
import { StringLiteralType } from "typescript";
import Patients from "../../data/patients.json"
import Patient from "../../models/patient";
import { v4 as uuid } from 'uuid';


export default class PatientStore{

    testData=Patients;
    patientRegistry: Map<number,Patient>= new Map<number,Patient>();
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get patients() {
        return Array.from(this.patientRegistry.values()); 
    }

    setLoadingInitial = (state:boolean) => {
        this.loadingInitial=state;
    }
    
    loadPatients = async () =>{
        this.setLoadingInitial(true);

            try{
                // const patientLoad = await agent.Patients.list();
                const patientLoad = this.testData;
                patientLoad.forEach((patient:Patient) => 
                    this.patientRegistry.set(patient.id,patient)
                );
                this.setLoadingInitial(false);
            }
            catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
    }

   
    deletePatient = async (id:number) => {
        this.loading=true;
        try{
            //  await agent.Patients.delete(id);
             runInAction(()=>{
                this.patientRegistry.delete(id);
                this.loading=false;
            });
            console.log(this.patients)

            //NADPISANIE CAŁEGO JSONA AKTUALNIE BO NIE MAM BAZY
            this.testData=this.patients;
        }
        catch(e)
        {
            console.log(e);
            runInAction(() => {
                this.loading=false;
            });
        }
    }

    createPatient = async (patient: Patient) =>{
        this.loading =true;
        try{
            //const response = await agent.Patients.create(patient);

            // patient.id=uuid();
            // TYMCZASOWE ID
            let max=10000; let min=400;
            patient.id=Math.floor(Math.random() * (max - min + 1)) + min;
            runInAction(() => {
                // patient.id = response.id;
                this.patientRegistry.set(patient.id,patient);
                this.loading=false;
            });
        }
        catch(e){
            runInAction(() => {
                this.loading=false;
            });
            
        }
    }

    updatePatient = async(patient:Patient)=>{
        this.loading=true;
        try{
            // await agent.Outposts.update(outpost);
            runInAction(()=>{
                this.patientRegistry.set(patient.id,patient);
                this.loading=false;
            });
        }
        catch(e){
            runInAction(()=>{
                this.loading=false;
            })
        }
    }

    loadPatient = async (id:number) => {
        let patient = this.patientRegistry.get(id);
        //EDIT zwaraca dane  do forma
        if(patient){
            console.log(`Taki obiekt pacjent  w promise istnieje id:${id}, patient.name: ${patient.name}`);
            patient.id=id;
            // this.selectedPatient = patient;
            return patient;
        }
        else {
            this.loadingInitial = true;
            try{
                //ladowanie ciała DTO 

                // patient = await agent!.Patients.details(id);


                this.patientRegistry.set(patient!.id,patient!);
                // this.selectedPatient = patient;

                this.setLoadingInitial(false);
                return patient;
            }
            catch(e)
            {
                console.log(e);
                this.setLoadingInitial(false);
            }
        }
    }
}