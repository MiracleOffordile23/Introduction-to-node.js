import mongoose from "mongoose";

interface INote {
    title : string;
    content : string;

}

interface INoteWithCategoryFilter extends INote {
    category :  mongoose.Types.ObjectId
}

interface INoteWithCategory extends INote {
    category : ICategory
};

interface ICategory {
    name : string
}

export { INote, ICategory, INoteWithCategory, INoteWithCategoryFilter } 
