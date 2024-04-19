import Image from 'next/image'
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABrAGsDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EAB8QAQEBAQEBAQACAwAAAAAAAAABAgMSESEEQSIxMv/EABcBAQEBAQAAAAAAAAAAAAAAAAIDAQD/xAAZEQEBAQEBAQAAAAAAAAAAAAAAAQIRITH/2gAMAwEAAhEDEQA/AE0vRtL1GQ6n2n3FW4RrKmUtkSfqjnATP6fzypahJ6dzUZJxD8xOrQQdD+B0Jp+iLv8A2t6I+0dHPJ/kf9EKP5M/yTqDH1wNQwNiMVpGoVcqLA3JxLRMwbjLZk3OSTbjJ2YHMMkGnGfA6M+A0JpuiPtF3RH2jY15f8nKRf3n36juP1XLOPq2VrkDoLGfBu+HEqGZMzHSDzGg3MHIyCGlGUGjKXphxP0SdVfRJ1dGou0TXP6q6kfFIT6D65n131Jla2B+tlKJ0cHC5RytEyN+gld9Y2NtL1RWlaonC+lSdao6VL0rYSboSZ0pP1SFHu/XfS/TvSQUz6KUn030QU6UU0TNNmmif6d6J9u9jShl0XrQbsrW2FGb0m6aHvaXrtsIrrsj0zpv7S/Ssb3j3/TvRfp3pFPpnpvon0z0cGn+2+0/t3tzFPtl2n9svQaUPuytbKvQrfQLTg+nRH26/wBM69U9v2/pZrfjrfrHOLovb+stYyjAdaG6dQ04NbdM9hoWug/bLsAanpSN1snp0Fojf+wk6YbftY5yguc5znP/2Q=='

export const Description = () => {
    return (
        <section className={styles.Description}>
           <div className={styles.Description__imageContainer}>
           <Image 
                src="/images/description.jpeg" 
                alt="products marketplace" 
                fill
                placeholder='blur'
                blurDataURL={PLACEHOLDER_IMAGE}
            />
           </div>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}