export interface Category {
  id: number;
  name: string;
  createAt: any;
  updateAt: any;
  notes: Note[];
}

export interface Note {
  id: number;
  title: string;
  content: string;
  createAt: any;
  updateAt: any;
}
