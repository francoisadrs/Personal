import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import "./ImageCarousel.css";

export type CarouselItem = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
};

type ImageCarouselProps = {
  items: CarouselItem[];
  /** Titre de section affiché au-dessus du carousel. */
  title?: string;
  /** Largeur d'une carte en px. */
  itemWidth?: number;
  /** Ratio largeur / hauteur de l'image. */
  aspectRatio?: number;
  onSelect?: (item: CarouselItem) => void;
  emptyLabel?: string;
};

const GAP = 12;

export function ImageCarousel({
  items,
  title,
  itemWidth = 180,
  aspectRatio = 4 / 5,
  onSelect,
  emptyLabel = "Aucune image",
}: ImageCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft < maxScroll - 1);
    // À la fin du défilement, les dernières cartes ne peuvent pas s'aligner
    // à gauche : on force alors l'index sur la dernière.
    const index =
      track.scrollLeft >= maxScroll - 1
        ? items.length - 1
        : Math.round(track.scrollLeft / (itemWidth + GAP));
    setActiveIndex(Math.max(0, Math.min(items.length - 1, index)));
  }, [itemWidth, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0 });
    updateState();
    const observer = new ResizeObserver(updateState);
    observer.observe(track);
    return () => observer.disconnect();
  }, [items, updateState]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    track.scrollTo({ left: clamped * (itemWidth + GAP), behavior: "smooth" });
  };

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const perPage = Math.max(1, Math.floor((track.clientWidth + GAP) / (itemWidth + GAP)));
    scrollToIndex(activeIndex + direction * perPage);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }
  };

  const showDots = items.length > 1 && items.length <= 12;

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label={title ?? "Images"}>
      <header className="carousel__header">
        {title && <h2 className="carousel__title">{title}</h2>}
        {items.length > 0 && (
          <div className="carousel__nav">
            <button
              type="button"
              className="carousel__nav-button"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label="Images précédentes"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              type="button"
              className="carousel__nav-button"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label="Images suivantes"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        )}
      </header>

      {items.length === 0 ? (
        <p className="carousel__empty">{emptyLabel}</p>
      ) : (
        <ul
          ref={trackRef}
          className="carousel__track"
          onScroll={updateState}
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-label="Défiler avec les flèches du clavier"
          style={{ gap: GAP }}
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              className="carousel__slide"
              style={{ width: itemWidth }}
              aria-roledescription="slide"
              aria-label={`${index + 1} sur ${items.length}`}
            >
              <button
                type="button"
                className="carousel__card"
                onClick={() => onSelect?.(item)}
                tabIndex={-1}
              >
                <img
                  className="carousel__image"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  draggable={false}
                  style={{ aspectRatio }}
                />
                {(item.title || item.subtitle) && (
                  <span className="carousel__caption">
                    {item.title && <span className="carousel__caption-title">{item.title}</span>}
                    {item.subtitle && (
                      <span className="carousel__caption-subtitle">{item.subtitle}</span>
                    )}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      {showDots && (
        <div className="carousel__dots">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="carousel__dot"
              aria-label={`Aller à l'image ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
