import { v4 as uuidv4 } from 'uuid';

export function generateIdempotencyKey() {

    return uuidv4();

}