import { CareerItem } from '../career-item';

export const Career = () => {
  return (
    <div className="flex flex-col gap-3 p-3 ">
      <CareerItem
        title="Memer"
        department="UI/UX Design"
        level={<span className = "font-bold">Experienced</span>}
        onEdit={() => alert('Editing Memer Item')}
        onDelete ={() => alert('Warning! Deleting Memer')}
      />
      <CareerItem
        title="Slack Chatter"
        department="Chatting"
        level={<span className = "underline">Entry</span>}
        onEdit={() => alert('Editing Chatter Item')}
        onDelete ={() => alert('Warning! Deleting Janitor')}
      />
      <CareerItem
        title="Janitor"
        department="Health/Welfare"
        level="Experienced"
        onEdit={() => alert('Editing Janitor Item')}
        onDelete ={() => alert('Warning! Deleting Janitor')}
      />
      <CareerItem
        title="GitHub Issue Commentor"
        department="Engineering"
        level="Internship"
        studentFriendly={true}
        onEdit={() => alert('Editing Commentor Item')}
        onDelete ={() => alert('Warning! Deleting Commentor')}
      />
    </div>
  );
};
