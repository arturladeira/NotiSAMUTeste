export interface Registro {
    id: string;
    notifierName: string;
    occurrenceDate: string;
    schedule: string;
    notifierProfession: string;
    locationCategory: string;
    patientName: string;
    patientBirthDate: Date;
    occurrenceNumber: Int32Array;
    patientSex: string;
  }