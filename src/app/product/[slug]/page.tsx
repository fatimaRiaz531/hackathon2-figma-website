import { groq } from 'next-sanity';
import { Product } from '../../../../types/products';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        title,
        _type,
      productImage,
        price,
        description,
        retalPrice,
        availability,
        isNew,
        }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className=" w-full aspect-square mt-9">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={200}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans">{product.price}</p>
          <p className="text-2xl font-sans text-blue-500">{product.availability}</p>
          <p className="text-2xl font-sans">{product.rentalPrice}</p>
          <p className=" font-sans text-sm">{product.description}</p>
         
          <p className="text-2xl font-sans">{product.isNew}</p>
        </div>
      
      </div>
    </div>
  );
}
