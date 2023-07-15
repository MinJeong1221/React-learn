import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/users',
    async (req, res, ctx) => {
      return res(
        ctx.status(403),
        ctx.json({ errorMessege: 'data not found' }),
        // ctx.json({
        //   id: '222',
        //   firstName: 'cho',
        //   lastName: 'minjeong',
        // }),
      );
    },
  ),
];
