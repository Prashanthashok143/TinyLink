import { tinyLinkModel } from "../model/tinyLinkSchema";
import { Request, Response } from "express";
import  {isWebUri} from "valid-url";

class tinyLinkController {
    public async createTinyLink(req:Request,res:Response){
        try {
            const {code , targetURL} = req.body;
            const exisitingCode = await tinyLinkModel.findOne({ code });
            if(!isWebUri(targetURL)) return res.status(400).json({ error: 'Invalid URL' })
            if (exisitingCode) {
                return  res.status(400).json({ message: "code already exists" });
            }

            await tinyLinkModel.create(req.body);
            res.status(201).json({ message: "tinyLink generated successfully"});
        }catch (error) {    
            res.status(500).json({ message: "Server error", error });
        }
    }

    public async getTinyLinks(req:Request,res:Response){
        try{
            const Response = await tinyLinkModel.find().sort({createdAt:-1});
            res.status(200).json(Response);

        }catch(error){
            res.status(500).json({message:"Server error",error})
        }
    }

    public async deleteTinyLink(req:Request,res:Response){
        try {
            const code = req.params.code as String
            await tinyLinkModel.findOneAndDelete({code});
            res.json({message:"deleted the link successfull"})
        }catch(error){
            res.status(500).json({message:"Server error",error})
        }
    }
   
}
export default new tinyLinkController();