import sanityClient from '@sanity/client';
import imageUrl from '@sanity/image-url';
// import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder.d.ts';
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient(
    {
       projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
       dataset:'production',
       apiVersion:'2022-08-06',
       useCdn: true,//allows to more quickly show the pics to people around the world 
       token: process.env.REACT_APP_SANITY_TOKEN ,
    }
);

const builder = ImageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);