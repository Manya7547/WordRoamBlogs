 import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function Postcard({
    $id, 
    title,
    featuredImage,
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='bg-grey-100 w-full rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
        </div>
        <h2 className='text-xl font-bold'>title</h2>
    </Link>
  )
}

export default Postcard