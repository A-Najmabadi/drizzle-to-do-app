import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon("postgresql://root:XkYgSzHmMAf9chdgp2OXOtlb@bromo.liara.cloud:32308/postgres");

const db = drizzle(sql);

export default db;
