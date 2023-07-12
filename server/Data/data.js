const data = {
  userCollection: [
    {
      _id: "user1",
      email: "user1@example.com",
      profile: null,
    },
    {
      _id: "user2",
      email: "user2@example.com",
      profile: "profile1",
    },
  ],
  profileCollection: [
    {
      _id: "profile1",
      name: "John Doe",
      contactInfo: {
        email: "john@example.com",
      },
      dogs: ["dog1"],
      address: "123 Park Avenue",
      messages: [
        {
          from_id: "user2",
          conversation_id: "conversation1",
        },
      ],
    },
  ],
  dogCollection: [
    {
      _id: "dog1",
      name: "Buddy",
      breed: "Labrador Retriever",
      bio: "Friendly and playful",
      tags: ["friendly", "playful"],
      lookingForPartner: true,
      picture: "dog1.jpg",
    },
  ],
  conversationCollection: [
    {
      _id: "conversation1",
      profile1: "profile1",
      profile2: "profile2",
      messages: [
        {
          sender: 1,
          time: "2023-06-30T10:00:00.000Z",
          message: "Hello, would you like to arrange a playdate for our dogs?",
        },
        {
          sender: 2,
          time: "2023-06-30T10:05:00.000Z",
          message: "Sure, that sounds great! When and where should we meet?",
        },
      ],
    },
  ],
  testimonialsCollection: [
    {
      _id: "testimonial1",
      pictures: "testimonial1.jpg",
    },
  ],
};

module.exports = data;
