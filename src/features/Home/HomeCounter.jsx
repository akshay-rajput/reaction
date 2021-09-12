import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from './homeSlice';

export default function HomeCounter() {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-2 mt-4">
            <button onClick={() => dispatch(decrementCounter())} className="px-2 border border-gray-600 bg-gray-600 text-white rounded">-</button>
            {count}
            <button onClick={() => dispatch(incrementCounter())} className="px-2 border border-gray-600 bg-gray-600 text-white rounded">+</button>
        </div>
    )
}
