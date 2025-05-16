import { type Masory } from "../../types/gallery";
import 'photoswipe/style.css';

import Button from '../Button';
import { useGallery } from "./useGallerty"
import './styles.css';


export default function Galeria({ i18n, edicion = '1' }: { i18n?: any, edicion?: string }) {
  const { first, isExpanded, photos, LoadMore } = useGallery({ edicion })

  return (
    <section class="max-w-8xl mx-auto px-20">
      <h2
        class="mx-auto mb-8 text-center text-3xl lg:text-6xl font-semibold tracking-wide"
      >
        {i18n?.GALLERY?.TITLE}
      </h2>
      <p class="text-center text-2xl">{i18n?.GALLERY?.TEXT}</p>

      <masonry-layout
        gap="24"
        maxcolwidth="600"
        class="lg:mx-auto mx-4 py-20"
        id="gallery"
      >
        {
          photos.map(({ height, width }, i) => (
            <a
              class="group rounded-xl hover:scale-105 hover:contrast-[110%] transition-all relative py-6"
              href={`/archivo-page/${edicion}/gallery/img-${i + 1}.webp`}
              target="_blank"
              data-cropped="true"
              data-pswp-width={width}
              data-pswp-height={height}
              ref={!first.current ? first : undefined}
            >
              <img
                class="rounded-xl object-cover w-full h-auto"
                loading="lazy"
                src={`/archivo-page/${edicion}/gallery/thumbnails/img-${i + 1
                  }.webp`}
                alt="Fotografía de los premios ESLAND"
              />
              <img
                class="blur-md opacity-0 group-hover:opacity-100 absolute inset-0 transition contrast-150 -z-10 object-cover"
                loading="lazy"
                src={`/archivo-page/${edicion}/gallery/thumbnails/img-${i + 1
                  }.webp`}
                alt="Imagen con efecto blur para hacer de sombra de una fotografía de los premios ESLAND"
              />
            </a>
          ))
        }
      </masonry-layout>

      <div class="text-center mx-auto">
        {
          !isExpanded &&
          <Button onClick={LoadMore} id="load-more" url="#">{i18n?.GALLERY?.LOAD_MORE}</Button>
        }
      </div>

    </section>
  )
}