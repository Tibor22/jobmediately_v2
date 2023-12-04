// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import { readUserSession } from '../lib/actions';

// export default function RolePage() {
//     const router = useRouter();
//     const { role } = router.query; // Extract the dynamic part of the URL

//     useEffect(() => {
//         const checkSessionAndRedirect = async () => {
//             const { data } = await readUserSession();
//             if (!data.session || data.userRole !== role) {
//                 // Redirect if no session or role mismatch
//                 router.push('/');
//             }
//         };

//         checkSessionAndRedirect();
//     }, [role, router]);

//     return <div>Role: {role}</div>;
// }
export default function Role({ params }: { params: { slug: string } }) {
	return <div>My Post: {params.slug}</div>;
}
