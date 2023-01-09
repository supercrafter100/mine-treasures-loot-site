import React from 'react'

const discord = () => {
    return (
        <div>Redirecting to discord...</div>
    )
}

export function getStaticProps() {
    return {
        redirect: {
            permanent: true,
            destination: 'https://discord.gg/ASB67acx2Y',
        },
    };
}

export default discord