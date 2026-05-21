import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-SignalComponent',
  imports: [],
  templateUrl: './SignalComponent.html',
  styleUrl: './SignalComponent.css',
})
export class SignalComponent {

  // intergerNumber: number[] = [];
  // intergerTarget: number = 0;




  count = signal(1);


  twoSum(intergerNumber:number[], intergerTarget: number): number[] {
    const numMap: Map<number, number> = new Map();

    for (let i = 0; i < intergerNumber.length; i++) {
      const complement = intergerTarget - intergerNumber[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement)!, i];
      }
      numMap.set(intergerNumber[i], i);
    }

    throw new Error("No two sum solution");

  }

  twoSumMethod = function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>(); 

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }
   
    return [];
}

}
