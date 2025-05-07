export class Book 
 {
  constructor(id, title, author) 
  {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  describe() 
  {
    return `"${this.title}" by ${this.author}`;
  }
}