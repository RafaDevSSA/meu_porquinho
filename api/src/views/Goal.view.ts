import { Goals } from "src/entities/goals.entity";

export class GoalView {

    public static returnView(goal: Goals): Goals {
        const { id, description, value, date   } = goal;
        return { id, description, value, date   };
    };
}