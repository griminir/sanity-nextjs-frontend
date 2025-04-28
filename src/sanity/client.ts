import {createClient} from 'next-sanity'
export const client = createClient({
    projectId: 'maildbg4',
    dataset: 'production',
    useCdn: false,
})