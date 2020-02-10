import { MapEntry } from "../cache/query_map";
import { Filter } from "../filter/filter";

/**
 * An invocable agent that operates against the entry objects within a
 * {@link module:coherence-js/cache/NamedCache}.  Several of the methods
 * on `NamedCache` that accept a processor can also accept filter to
 * constrain the set of entries to which the processor will be applied.
 * 
 * @param <K> the type of the NamedCache entry key.
 * @param <V> the type of the NamedCache entry value.
 * @param <R> the type of value returned by the EntryProcessor.
 * 
 */
 export interface EntryProcessor<K=any, V=any, R=any> {

   '@class': string;

    process(entry: MapEntry<K, V>): R;
    
    andThen(processor: EntryProcessor<K, V, any>): EntryProcessor<K, V, any>;
    
    when(filter: Filter<V>): EntryProcessor<K, V, R>;
 }