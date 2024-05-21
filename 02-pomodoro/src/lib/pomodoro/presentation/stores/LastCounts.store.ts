import { writable } from "svelte/store";

import type { CountEntity } from "../../domain/entities/CountEntity";

export const useLastCountsStore = writable<CountEntity[]>([]);
