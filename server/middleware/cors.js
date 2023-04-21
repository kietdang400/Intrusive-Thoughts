
export const cors=async(req, res, next)=>{
     res.header('Access-Control-Allow-Origin', '*');
  next();
}
