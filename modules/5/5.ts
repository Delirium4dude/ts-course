namespace lesson5 {
  class User {
    skills: string[]
    constructor(skills: string[]) {
      this.skills = skills;
    }

    // перегрузка методов класса
    addSkill(skill: string): string[]; // перегрузка нужна просто для дополнения среды
    addSkill(skills: string[]): string[];
    addSkill(skillOrSkills: string | string[]): string[] {
      if (Array.isArray(skillOrSkills)) {
        this.skills.push(...skillOrSkills)
      } else if (typeof skillOrSkills === 'string') {
        this.skills.push(skillOrSkills);
      }
      
      return this.skills;
    };
  }

  const user = new User(['read', 'eat']);
  console.log(user.addSkill('swim'));
  console.log(user.addSkill(['walk', 'ride']));

  // перегрузка функции
  function run(distance:string):string;
  function run(distance:number):number;
  function run(distance:number | string):number | string {
    if (typeof distance === 'string') {
      return '';
    } else {
      return 1;
    }
  }
}