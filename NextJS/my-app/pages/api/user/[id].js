export default function handler(req,res){
    const {id} = req.query;

    if(req.method === 'GET'){
        res.status(200).json({
            message:`Fetching details for user ${id}`
        });
    }
    else if(req.method === 'DELETE'){
        res.status(200).json({
            message:`User ${id} deleted successfully`
        })
    }
    else{
        res.setHeader('Allow',['GET','DELETE']);
        res.status(405).end(`Method ${req.method} Not allowed`)
    }
}