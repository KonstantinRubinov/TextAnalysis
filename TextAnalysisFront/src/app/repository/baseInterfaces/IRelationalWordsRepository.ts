export interface IRelationalWordsRepository {
    GetAllWords(): void;
    GetWordsBy(word:string): void;
    PostWord(synonimWord:string, antonimWord:string, mongoId:string): void;
    PutWord(word_to_replace:string, word:string, mongoId:string): void;
    InsertWord(word_to_find:string, word_to_add:string, mongoId:string): void
    DeleteWord(wordToRemove:string): void;
    DeleteCollection(word:string): void;
}